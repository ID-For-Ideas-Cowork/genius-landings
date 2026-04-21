    const form = document.getElementById('leadForm');
    const message = document.getElementById('formMessage');

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showMessage(text, type) {
      message.textContent = text;
      message.className = 'status-message';
      message.classList.add(type === 'success' ? 'status-success' : 'status-error');
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();

      if (!name || !email || !phone) {
        showMessage('Todos los campos son obligatorios.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showMessage('Ingresá un email válido.', 'error');
        return;
      }

      showMessage('Tus datos fueron recibidos correctamente.', 'success');
      form.reset();
    });