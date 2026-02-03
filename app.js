// Tamil Nadu Tourism - Main Application
import { places, tags, budgetTiers } from './data/places.js';
import { festivals, getFestivalsByMonth, getUpcomingFestivals } from './data/festivals.js';
import { translations, t } from './data/translations.js';

// ===== State Management =====
const state = {
    language: localStorage.getItem('tn-tourism-lang') || 'en',
    searchQuery: '',
    filters: {
        categories: [],
        budgets: [],
        studentFriendly: false
    },
    filteredPlaces: [...places],
    currentMonth: new Date().getMonth() + 1
};

// ===== DOM Elements =====
const elements = {
    // Language
    langToggle: document.getElementById('lang-toggle'),
    langText: document.getElementById('lang-text'),

    // Navigation
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileNav: document.getElementById('mobile-nav'),

    // Search
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),

    // Filters
    categoryFilters: document.getElementById('category-filters'),
    budgetFilters: document.getElementById('budget-filters'),
    studentFilter: document.getElementById('student-filter'),
    filterClear: document.getElementById('filter-clear'),
    filterApply: document.getElementById('filter-apply'),

    // Content
    bestMonthPlaces: document.getElementById('best-month-places'),
    currentMonth: document.getElementById('current-month'),
    placesGrid: document.getElementById('places-grid'),
    festivalsGrid: document.getElementById('festivals-grid'),
    resultsCount: document.getElementById('results-count'),

    // Modal
    modal: document.getElementById('place-modal'),
    modalBackdrop: document.getElementById('modal-backdrop'),
    modalClose: document.getElementById('modal-close'),
    modalBody: document.getElementById('modal-body'),

    // Loading
    loadingOverlay: document.getElementById('loading-overlay')
};

// ===== Initialization =====
function init() {
    showLoading();

    // Apply saved language
    updateLanguage();

    // Build category filters
    buildCategoryFilters();

    // Render content
    renderBestMonthPlaces();
    renderPlaces();
    renderFestivals();

    // Setup event listeners
    setupEventListeners();

    hideLoading();
}

// ===== Loading =====
function showLoading() {
    elements.loadingOverlay.classList.add('active');
    elements.loadingOverlay.setAttribute('aria-hidden', 'false');
}

function hideLoading() {
    setTimeout(() => {
        elements.loadingOverlay.classList.remove('active');
        elements.loadingOverlay.setAttribute('aria-hidden', 'true');
    }, 300);
}

// ===== Language =====
function updateLanguage() {
    const lang = state.language;
    document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';

    // Update toggle button
    elements.langText.textContent = t('languageToggle', lang);
    elements.langToggle.setAttribute('aria-label',
        lang === 'en' ? 'Switch language to Tamil' : 'Switch language to English'
    );

    // Update all translateable elements
    updateTextContent('app-title', 'appTitle', lang);
    updateTextContent('app-tagline', 'appTagline', lang);
    updateTextContent('nav-home', 'navHome', lang);
    updateTextContent('nav-places', 'navPlaces', lang);
    updateTextContent('nav-festivals', 'navFestivals', lang);
    updateTextContent('nav-plan', 'navPlan', lang);
    updateTextContent('hero-title', 'heroTitle', lang);
    updateTextContent('hero-subtitle', 'heroSubtitle', lang);
    updateTextContent('hero-cta', 'heroCta', lang);
    updateTextContent('best-month-text', 'bestMonthTitle', lang);
    updateTextContent('best-month-subtitle', 'bestMonthSubtitle', lang);
    updateTextContent('filter-title', 'filterTitle', lang);
    updateTextContent('filter-categories', 'filterCategories', lang);
    updateTextContent('filter-budget', 'filterBudget', lang);
    updateTextContent('student-label', 'studentBudget', lang);
    updateTextContent('festivals-title', 'festivalTitle', lang);
    updateTextContent('festivals-subtitle', 'festivalSubtitle', lang);
    updateTextContent('footer-about', 'footerAbout', lang);
    updateTextContent('footer-contact', 'footerContact', lang);
    updateTextContent('footer-privacy', 'footerPrivacy', lang);
    updateTextContent('footer-accessibility', 'footerAccessibility', lang);
    updateTextContent('footer-copyright', 'footerCopyright', lang);
    updateTextContent('skip-link', 'skipToMain', lang);
    updateTextContent('loading-text', 'loadingPlaces', lang);
    updateTextContent('results-text', 'resultsFound', lang);
    updateTextContent('feature1-title', 'feature1Title', lang);
    updateTextContent('feature1-desc', 'feature1Desc', lang);
    updateTextContent('feature2-title', 'feature2Title', lang);
    updateTextContent('feature2-desc', 'feature2Desc', lang);
    updateTextContent('feature3-title', 'feature3Title', lang);
    updateTextContent('feature3-desc', 'feature3Desc', lang);
    updateTextContent('feature4-title', 'feature4Title', lang);
    updateTextContent('feature4-desc', 'feature4Desc', lang);

    // Update search placeholder
    elements.searchInput.placeholder = t('searchPlaceholder', lang);
    elements.searchBtn.textContent = t('searchButton', lang);
    elements.filterClear.textContent = t('filterClear', lang);
    elements.filterApply.textContent = t('filterApply', lang);

    // Update month name
    elements.currentMonth.textContent = t('months', lang)[state.currentMonth - 1];

    // Re-render dynamic content
    renderBestMonthPlaces();
    renderPlaces();
    renderFestivals();
}

function updateTextContent(elementId, translationKey, lang) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = t(translationKey, lang);
    }
}

function toggleLanguage() {
    state.language = state.language === 'en' ? 'ta' : 'en';
    localStorage.setItem('tn-tourism-lang', state.language);
    updateLanguage();
}

// ===== Category Filters =====
function buildCategoryFilters() {
    const lang = state.language;
    const categoryContainer = elements.categoryFilters;
    categoryContainer.innerHTML = '';

    Object.entries(tags).forEach(([key, value]) => {
        const label = document.createElement('label');
        label.className = 'filter-option';
        label.innerHTML = `
      <input type="checkbox" value="${key}" name="category">
      <span class="filter-label">${value.icon} ${value[lang]}</span>
    `;
        categoryContainer.appendChild(label);
    });
}

// ===== Filtering =====
function applyFilters() {
    const lang = state.language;
    let filtered = [...places];

    // Search query
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(place =>
            place.name.en.toLowerCase().includes(query) ||
            place.name.ta.includes(query) ||
            place.district.en.toLowerCase().includes(query) ||
            place.district.ta.includes(query) ||
            place.tags.some(tag => tags[tag]?.en.toLowerCase().includes(query) || tags[tag]?.ta.includes(query))
        );
    }

    // Category filters
    if (state.filters.categories.length > 0) {
        filtered = filtered.filter(place =>
            state.filters.categories.some(cat => place.tags.includes(cat))
        );
    }

    // Budget filters
    if (state.filters.budgets.length > 0) {
        filtered = filtered.filter(place =>
            state.filters.budgets.includes(place.budget)
        );
    }

    // Student friendly
    if (state.filters.studentFriendly) {
        filtered = filtered.filter(place => place.studentFriendly);
    }

    state.filteredPlaces = filtered;
    elements.resultsCount.textContent = filtered.length;
    renderPlaces();
}

function clearFilters() {
    state.searchQuery = '';
    state.filters = {
        categories: [],
        budgets: [],
        studentFriendly: false
    };

    elements.searchInput.value = '';
    elements.studentFilter.checked = false;

    document.querySelectorAll('#category-filters input, #budget-filters input').forEach(input => {
        input.checked = false;
    });

    state.filteredPlaces = [...places];
    elements.resultsCount.textContent = places.length;
    renderPlaces();
}

// ===== Render Functions =====
function renderBestMonthPlaces() {
    const lang = state.language;
    const month = state.currentMonth;

    const bestPlaces = places
        .filter(place => place.bestMonths.includes(month))
        .slice(0, 6);

    elements.bestMonthPlaces.innerHTML = bestPlaces.map(place =>
        createPlaceCard(place, lang)
    ).join('');
}

function renderPlaces() {
    const lang = state.language;

    if (state.filteredPlaces.length === 0) {
        elements.placesGrid.innerHTML = `
      <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
        <p style="font-size: 1.25rem; color: var(--text-secondary);">${t('noResults', lang)}</p>
      </div>
    `;
        return;
    }

    elements.placesGrid.innerHTML = state.filteredPlaces.map(place =>
        createPlaceCard(place, lang)
    ).join('');
}

function createPlaceCard(place, lang) {
    const tagIcons = place.tags.slice(0, 2).map(tag =>
        `<span class="place-tag">${tags[tag]?.icon || ''} ${tags[tag]?.[lang] || tag}</span>`
    ).join('');

    const budgetIcon = budgetTiers[place.budget]?.icon || '💰';
    const studentBadge = place.studentFriendly
        ? `<span class="student-badge">🎓 ${t('studentFriendly', lang)}</span>`
        : '';

    // Get icon based on primary tag
    const primaryTag = place.tags[0];
    const placeIcon = tags[primaryTag]?.icon || '📍';

    return `
    <article class="place-card" role="listitem" data-place-id="${place.id}" tabindex="0">
      <div class="place-image">
        <span class="place-image-placeholder">${placeIcon}</span>
        <div class="place-tags">${tagIcons}</div>
        <span class="place-budget-badge">${budgetIcon}</span>
      </div>
      <div class="place-content">
        <h3 class="place-name">${place.name[lang]}</h3>
        <p class="place-district">📍 ${place.district[lang]}</p>
        <p class="place-description">${place.description[lang]}</p>
        <div class="place-meta">
          <span class="place-cost">₹${place.dailyCost} <span>/ ${t('perDay', lang)}</span></span>
          ${studentBadge}
        </div>
      </div>
    </article>
  `;
}

function renderFestivals() {
    const lang = state.language;
    const currentDay = new Date().getDate();

    const upcomingFestivals = getUpcomingFestivals(state.currentMonth, currentDay).slice(0, 4);

    elements.festivalsGrid.innerHTML = upcomingFestivals.map(festival => {
        const monthName = t('months', lang)[festival.month - 1];
        const highlights = festival.highlights.slice(0, 3).map(h =>
            `<span class="festival-highlight">${h}</span>`
        ).join('');

        return `
      <article class="festival-card" role="listitem">
        <div class="festival-header">
          <span class="festival-icon">🎉</span>
          <div class="festival-info">
            <h3 class="festival-name">${festival.name[lang]}</h3>
            <p class="festival-date">${monthName} ${festival.days[0]}-${festival.days[festival.days.length - 1]}</p>
          </div>
        </div>
        <p class="festival-description">${festival.description[lang]}</p>
        <div class="festival-highlights">${highlights}</div>
      </article>
    `;
    }).join('');
}

// ===== Modal =====
function openModal(placeId) {
    const place = places.find(p => p.id === placeId);
    if (!place) return;

    const lang = state.language;
    const primaryTag = place.tags[0];
    const placeIcon = tags[primaryTag]?.icon || '📍';

    const highlights = place.highlights.map(h => `<li>${h}</li>`).join('');
    const bestMonths = place.bestMonths.map(m => t('months', lang)[m - 1]).slice(0, 4).join(', ');

    elements.modalBody.innerHTML = `
    <div class="modal-image">${placeIcon}</div>
    <h2 class="modal-title">${place.name[lang]}</h2>
    <p class="modal-district">📍 ${place.district[lang]}</p>
    <p class="modal-description">${place.description[lang]}</p>
    
    <div class="modal-highlights">
      <h4>Highlights</h4>
      <ul>${highlights}</ul>
    </div>
    
    <div class="modal-info">
      <div class="modal-info-item">
        <p class="modal-info-label">${t('dailyCost', lang)}</p>
        <p class="modal-info-value">₹${place.dailyCost}</p>
      </div>
      <div class="modal-info-item">
        <p class="modal-info-label">${t('bestTime', lang)}</p>
        <p class="modal-info-value">${bestMonths}</p>
      </div>
    </div>
  `;

    elements.modal.hidden = false;
    elements.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    elements.modalClose.focus();
}

function closeModal() {
    elements.modal.hidden = true;
    elements.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Language toggle
    elements.langToggle.addEventListener('click', toggleLanguage);

    // Mobile menu
    elements.mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = elements.mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        elements.mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        elements.mobileNav.classList.toggle('active');
        elements.mobileNav.setAttribute('aria-hidden', isExpanded);
    });

    // Search - debounced
    let searchTimeout;
    elements.searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            state.searchQuery = e.target.value;
            applyFilters();
        }, 300);
    });

    elements.searchBtn.addEventListener('click', () => {
        state.searchQuery = elements.searchInput.value;
        applyFilters();
    });

    // Filter checkboxes
    elements.categoryFilters.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const value = e.target.value;
            if (e.target.checked) {
                state.filters.categories.push(value);
            } else {
                state.filters.categories = state.filters.categories.filter(c => c !== value);
            }
        }
    });

    elements.budgetFilters.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const value = e.target.value;
            if (e.target.checked) {
                state.filters.budgets.push(value);
            } else {
                state.filters.budgets = state.filters.budgets.filter(b => b !== value);
            }
        }
    });

    elements.studentFilter.addEventListener('change', (e) => {
        state.filters.studentFriendly = e.target.checked;
    });

    elements.filterApply.addEventListener('click', applyFilters);
    elements.filterClear.addEventListener('click', clearFilters);

    // Place cards - event delegation
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.place-card');
        if (card) {
            const placeId = parseInt(card.dataset.placeId);
            openModal(placeId);
        }
    });

    // Keyboard navigation for cards
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const card = e.target.closest('.place-card');
            if (card) {
                const placeId = parseInt(card.dataset.placeId);
                openModal(placeId);
            }
        }
    });

    // Modal
    elements.modalClose.addEventListener('click', closeModal);
    elements.modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !elements.modal.hidden) {
            closeModal();
        }
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                elements.mobileNav.classList.remove('active');
                elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== Start Application =====
document.addEventListener('DOMContentLoaded', init);
