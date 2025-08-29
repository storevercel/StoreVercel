document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const userBtn = document.querySelector('#user-btn');
  const createAccountBtn = document.querySelector('#create-account-btn');
  const aboutLink = document.querySelector('#about-link');
  const privacyLink = document.querySelector('#privacy-link');
  const termsLink = document.querySelector('#terms-link');
  const contactLink = document.querySelector('#contact-link');
  const loginModal = document.querySelector('#login-modal');
  const aboutModal = document.querySelector('#about-modal');
  const privacyModal = document.querySelector('#privacy-modal');
  const termsModal = document.querySelector('#terms-modal');
  const contactModal = document.querySelector('#contact-modal');
  const contentWrapper = document.querySelector('.content-wrapper');
  const submitBtn = document.querySelector('#submit-btn');
  const termsCheckbox = document.querySelector('#terms-checkbox');
  const privacyCheckbox = document.querySelector('#privacy-checkbox');
  const passwordInput = document.querySelector('#contrasena');
  const repeatPasswordInput = document.querySelector('#repetir-contrasena');
  const cardFields = document.querySelectorAll('.card-field');
  const cardNumberInput = document.querySelector('#card-number');
  const iphoneItems = document.querySelectorAll('.iphone-item');
  const toggleSpecs = document.querySelectorAll('.toggle-specs');
  const thumbColors = document.querySelectorAll('.thumb-color');
  const modelButtons = document.querySelectorAll('.model-btn');
  const memoryButtons = document.querySelectorAll('.memory-btn');
  const optionCards = document.querySelectorAll('.option-card');
  const colorButtons = document.querySelectorAll('.color-btn');

  // Precios para todos los productos según modelo y memoria
  const prices = {
    'iPhone 16': {
      '128GB': 1300000,
      '256GB': 1500000,
      '512GB': 2800000
    },
    'iPhone 16 Plus': {
      '128GB': 1950000,
      '256GB': 1700000,
      '512GB': 1900000
    },
    'iPhone 16 Pro': {
      '256GB': 1800000,
      '512GB': 2500000
    },
    'iPhone 16 Pro Max': {
      '256GB': 1850000,
      '512GB': 2350000,
      '1T': 3000000
    },
    'iPhone 15': {
      '128GB': 1100000,
      '256GB': 1350000,
      '512GB': 3000000
    },
    'iPhone 15 Plus': {
      '128GB': 1300000,
      '256GB': 1500000,
      '512GB': 3200000
    },
    'iPhone 15 Pro': {
      '256GB': 1700000,
      '512GB': 3400000
    },
    'iPhone 15 Pro Max': {
      '256GB': 1650000,
      '512GB': 2150000,
      '1T': 2800000
    },
    'iPhone 14': {
      '256GB': 700000,
      '512GB': 1100000
    },
    'iPhone 14 Plus': {
      '256GB': 900000,
      '512GB': 1300000
    },
    'iPhone 14 Pro': {
      '256GB': 1100000,
      '512GB': 1400000
    },
    'iPhone 14 Pro Max': {
      '256GB': 1300000,
      '512GB': 1800000
    },
    'iPhone 13': {
      '128GB': 700000,
      '256GB': 1000000
    },
    'iPhone 13 Mini': {
      '128GB': 900000,
      '256GB': 1200000
    },
    'iPhone 13 Pro': {
      '128GB': 1200000,
      '256GB': 1500000
    },
    'iPhone 13 Pro Max': {
      '128GB': 1500000,
      '256GB': 1900000
    },
    'Mac Studio': {
      '512GB': 2000000,
      '1T': 2500000
    },
    'Mac Studio Max': {
      '512GB': 3000000,
      '1T': 3500000
    },
    'MacBook Air': {
      '256GB': 1500000,
      '512GB': 1800000,
      '1T': 2200000
    },
    'MacBook Pro': {
      '256GB': 2000000,
      '512GB': 2500000,
      '1T': 3000000
    },
    'iPad': {
      '64GB': 800000,
      '256GB': 1000000,
      '512GB': 1200000
    },
    'iPad Air': {
      '64GB': 1000000,
      '256GB': 1200000,
      '512GB': 1400000
    },
    'iPad Pro': {
      '64GB': 1500000,
      '256GB': 1800000,
      '512GB': 2000000
    },
    'Apple Vision Pro': {
      '256GB': 3500000,
      '512GB': 4000000,
      '1T': 4500000
    },
    'Apple Watch Ultra': {
      '64GB': 900000
    },
    'Apple Watch Ultra 2': {
      '64GB': 950000
    }
  };

  // Imágenes para el catálogo
  const catalogImages = {
    'iPhone 16': 'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20pro2.png',
    'iPhone 15': 'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20pro2.png',
    'iPhone 14': 'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone133.png',
    'iPhone 13': 'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone133.png',
    'Mac Studio': 'https://github.com/storevercel/imagenesstorevercel/blob/main/mac%20studio3.png',
    'MacBook': 'https://github.com/storevercel/imagenesstorevercel/blob/main/macbook1.png',
    'iPad': 'https://github.com/storevercel/imagenesstorevercel/blob/main/ipad%2011%20pro3.png',
    'Apple Vision Pro': 'https://github.com/storevercel/imagenesstorevercel/blob/main/applevision.png',
    'Apple Watch Ultra': 'https://github.com/storevercel/imagenesstorevercel/blob/main/apple%20wacht%20ultra3.png'
  };

  // Imágenes para las miniaturas en los modales
  const thumbnails = {
    'iPhone 16': [
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20pro.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20pro1.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20pro2.png'
    ],
    'iPhone 15': [
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20protr.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20protr1.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20pro2.png'
    ],
    'iPhone 14': [
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20prot.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20prot1.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone%2016%20pro2.png'
    ],
    'iPhone 13': [
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone13.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone131.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/iphone133.png'
    ],
    'Mac Studio': [
      'https://github.com/storevercel/imagenesstorevercel/blob/main/mac%20studio2.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/mac%20studio1.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/mac%20studio.png'
    ],
    'MacBook': [
      'https://github.com/storevercel/imagenesstorevercel/blob/main/macbook%20m4.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/macbook%20m41.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/macbook%20m42.png'
    ],
    'iPad': [
      'https://github.com/storevercel/imagenesstorevercel/blob/main/ipad%2011%20pro.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/ipad%2011%20pro1.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/ipad%2011%20pro2.png'
    ],
    'Apple Vision Pro': [
      'https://github.com/storevercel/imagenesstorevercel/blob/main/apple%20vision%20pro.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/apple%20vision%20pro2.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/apple%20vision%20pro3.png'
    ],
    'Apple Watch Ultra': [
      'https://github.com/storevercel/imagenesstorevercel/blob/main/apple%20wacht%20ultra.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/apple%20wacht%20ultra11.png',
      'https://github.com/storevercel/imagenesstorevercel/blob/main/apple%20wacht%20ultra22.png'
    ]
  };

  // Colores disponibles para cada modelo de iPhone
  const colors = {
    'iPhone 16': ['Blanco', 'Negro', 'Azul Ultramar', 'Verde Azulado', 'Rosa'],
    'iPhone 15': ['Rosa', 'Azul', 'Verde', 'Amarillo', 'Negro'],
    'iPhone 14': ['Azul', 'Púrpura', 'Blanco Estrella', 'Negro Medianoche', 'Amarillo', 'Rojo'],
    'iPhone 13': ['Rosa', 'Azul', 'Medianoche', 'Blanco Estrella', 'Rojo']
  };

  // Función para actualizar el precio según modelo y memoria
  function updatePrice(modalId, model, memory) {
    const priceElement = document.querySelector(`#${modalId} .price`);
    const cuotas3 = document.querySelector(`#cuotas-3-${modalId.split('-')[1]}`);
    const cuotas6 = document.querySelector(`#cuotas-6-${modalId.split('-')[1]}`);
    const basePrice = prices[model]?.[memory] || prices[model]?.['256GB'] || 0;
    priceElement.textContent = `$${basePrice.toLocaleString('es-AR')}`;
    cuotas3.textContent = `3 cuotas: 15% descuento ($${Math.round(basePrice * 0.85).toLocaleString('es-AR')})`;
    cuotas6.textContent = `6 cuotas: 10% descuento ($${Math.round(basePrice * 0.9).toLocaleString('es-AR')})`;
  }

  // Función para inicializar imágenes en el modal
  function initializeModalImages(modalId, model) {
    const mainImage = document.querySelector(`#${modalId} .modal-color`);
    const thumbElements = document.querySelectorAll(`#${modalId} .thumb-color`);
    const modelThumbnails = thumbnails[model] || [];

    if (modelThumbnails.length > 0) {
      mainImage.style.backgroundImage = `url(${modelThumbnails[0]})`;
      mainImage.dataset.url = modelThumbnails[0];
      thumbElements.forEach((thumb, index) => {
        if (modelThumbnails[index]) {
          thumb.style.backgroundImage = `url(${modelThumbnails[index]})`;
          thumb.dataset.url = modelThumbnails[index];
          if (index === 0) {
            thumb.classList.add('active');
          } else {
            thumb.classList.remove('active');
          }
        }
      });
    }
  }

  // Función para abrir modales
  function openModal(modalId, model) {
    const modal = document.querySelector(`#${modalId}`);
    if (modal) {
      modal.classList.add('active');
      contentWrapper.classList.add('blurred');
      initializeModalImages(modalId, model);
      const defaultMemory = document.querySelector(`#${modalId} .memory-btn`)?.dataset.memory || '256GB';
      updatePrice(modalId, model, defaultMemory);
    }
  }

  // Función para cerrar modales
  function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
    contentWrapper.classList.remove('blurred');
  }

  // Evento para abrir modales de productos
  iphoneItems.forEach(item => {
    item.addEventListener('click', () => {
      const modalId = item.dataset.modal;
      const model = item.dataset.model;
      openModal(modalId, model);
    });
  });

  // Evento para cerrar modales
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Cerrar modal al hacer clic fuera
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  });

  // Evento para miniaturas
  thumbColors.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const modal = thumb.closest('.modal');
      const mainImage = modal.querySelector('.modal-color');
      const thumbElements = modal.querySelectorAll('.thumb-color');
      thumbElements.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImage.style.backgroundImage = `url(${thumb.dataset.url})`;
      mainImage.dataset.url = thumb.dataset.url;
    });
  });

  // Evento para botones de color (solo actualiza texto)
  colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      const selectedColor = modal.querySelector('.details-container [id^=selected-color]');
      const colorButtonsInModal = modal.querySelectorAll('.color-btn');
      colorButtonsInModal.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedColor.textContent = btn.dataset.color;
    });
  });

  // Evento para botones de modelo
  modelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      const modalId = modal.id;
      const modelButtonsInModal = modal.querySelectorAll('.model-btn');
      const memoryButtonsInModal = modal.querySelectorAll('.memory-btn');
      modelButtonsInModal.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const selectedMemory = memoryButtonsInModal[0]?.dataset.memory || '256GB';
      updatePrice(modalId, btn.dataset.model, selectedMemory);
    });
  });

  // Evento para botones de memoria
  memoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      const modalId = modal.id;
      const memoryButtonsInModal = modal.querySelectorAll('.memory-btn');
      const selectedModel = modal.querySelector('.model-btn.selected')?.dataset.model || modal.querySelector('.model-btn').dataset.model;
      memoryButtonsInModal.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      updatePrice(modalId, selectedModel, btn.dataset.memory);
    });
  });

  // Evento para cuotas
  optionCards.forEach(card => {
    card.addEventListener('click', () => {
      const modal = card.closest('.modal');
      const optionCardsInModal = modal.querySelectorAll('.option-card');
      optionCardsInModal.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  // Evento para toggle de especificaciones
  toggleSpecs.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const specsContainer = toggle.nextElementSibling;
      specsContainer.classList.toggle('expanded');
      toggle.textContent = specsContainer.classList.contains('expanded') ? 'Ocultar Características' : 'Características del Producto';
    });
  });

  // Evento para menú hamburguesa
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Evento para abrir modal de login
  userBtn.addEventListener('click', () => {
    openModal('login-modal');
  });

  // Evento para abrir modal de about
  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('about-modal');
  });

  // Evento para abrir modal de privacidad
  privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('privacy-modal');
  });

  // Evento para abrir modal de términos
  termsLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('terms-modal');
  });

  // Evento para abrir modal de contacto
  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('contact-modal');
  });

  // Evento para el formulario de registro
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const form = document.querySelector('#register-form');
      
      // Crear y mostrar modal de carga
      const loadingModal = document.createElement('div');
      loadingModal.className = 'modal active';
      loadingModal.innerHTML = `
        <div class="modal-content">
          <p>Cargando...</p>
        </div>
      `;
      document.body.appendChild(loadingModal);

      // Enviar datos al backend (mantiene tu lógica de Telegram)
      fetch('/registro', {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => response.json())
      .then(data => {
        // Esperar 3 segundos antes de mostrar el modal de error
        setTimeout(() => {
          loadingModal.remove();
          const errorModal = document.createElement('div');
          errorModal.className = 'modal active';
          errorModal.innerHTML = `
            <div class="modal-content">
              <button class="close-btn">&times;</button>
              <p>Ups... hubo un error al cargar el formulario. Estamos trabajando para solucionarlo. Volvé a intentarlo en unos minutos.</p>
              <ul>
                <li>📧 <strong>Gmail:</strong> storevercel@gmail.com</li>
                <li>📸 <strong>Instagram:</strong> <a href="https://instagram.com/storevercel" target="_blank">@storevercel</a></li>
                <li>📱 <strong>WhatsApp:</strong> <a href="https://wa.me/5492616258478" target="_blank">+54 9 261 6258478</a></li>
              </ul>
            </div>
          `;
          document.body.appendChild(errorModal);
          errorModal.querySelector('.close-btn').addEventListener('click', () => errorModal.remove());
        }, 3000);
      })
      .catch(error => {
        // En caso de error en la solicitud, también esperar 3 segundos
        setTimeout(() => {
          loadingModal.remove();
          const errorModal = document.createElement('div');
          errorModal.className = 'modal active';
          errorModal.innerHTML = `
            <div class="modal-content">
              <button class="close-btn">&times;</button>
              <p>Ups... hubo un error al cargar el formulario. Estamos trabajando para solucionarlo. Volvé a intentarlo en unos minutos.</p>
              <ul>
                <li>📧 <strong>Gmail:</strong> storevercel@gmail.com</li>
                <li>📸 <strong>Instagram:</strong> <a href="https://instagram.com/storevercel" target="_blank">@storevercel</a></li>
                <li>📱 <strong>WhatsApp:</strong> <a href="https://wa.me/5492616258478" target="_blank">+54 9 261 6258478</a></li>
              </ul>
            </div>
          `;
          document.body.appendChild(errorModal);
          errorModal.querySelector('.close-btn').addEventListener('click', () => errorModal.remove());
        }, 3000);
      });
    });
  }

  // Inicializar imágenes del catálogo
  iphoneItems.forEach(item => {
    const model = item.dataset.model;
    const img = item.querySelector('.iphone-color');
    if (catalogImages[model]) {
      img.style.backgroundImage = `url(${catalogImages[model]})`;
      img.dataset.url = catalogImages[model];
    }
  });
});
