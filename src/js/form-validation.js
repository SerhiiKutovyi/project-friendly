document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.support-form');

  const nameInput = form.elements['user-name'];
  const emailInput = form.elements['user-email'];
  const messageInput = form.elements['user-text'];

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    let hasError = false;

    // Очистити старі помилки
    clearError(nameInput);
    clearError(emailInput);
    clearError(messageInput);

    // Перевірка імені
    if (name.length < 5) {
      showError(nameInput, 'Ім’я повинно містити щонайменше 5 символів.');
      hasError = true;
    }

    // Перевірка email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      showError(emailInput, 'Будь ласка, введіть email.');
      hasError = true;
    } else if (!emailPattern.test(email)) {
      showError(emailInput, 'Email має некоректний формат.');
      hasError = true;
    }

    if (hasError) return;

    alert(`Дякуємо, ${name}! Ваше повідомлення надіслано.`);
    form.reset();
  });

  function showError(inputElement, message) {
    inputElement.classList.add('invalid');
    const wrapper = inputElement.closest('.support-form-wraper');
    const errorText = wrapper.querySelector('.error-text');
    if (errorText) {
      errorText.textContent = message;
      errorText.style.display = 'block';
    }
  }

  function clearError(inputElement) {
    inputElement.classList.remove('invalid');
    const wrapper = inputElement.closest('.support-form-wraper');
    const errorText = wrapper.querySelector('.error-text');
    if (errorText) {
      errorText.textContent = '';
      errorText.style.display = 'none';
    }
  }

  //
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('invalid')) {
        clearError(input);
      }
    });
  });
});
