document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.support-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let formIsValid = true;

    const fields = form.querySelectorAll('input, textarea');

    fields.forEach(field => {
      const wrapper = field.closest('.support-form-wraper');
      const errorText = wrapper.querySelector('.error-text');

      if (!field.checkValidity()) {
        field.classList.add('invalid');
        errorText.style.display = 'block';
        formIsValid = false;
      } else {
        field.classList.remove('invalid');
        errorText.style.display = 'none';
      }
    });

    if (formIsValid) {
      console.log('✅ Форма валідна. Очищення...');

      // Очистка полів
      form.reset();

      // Також прибираємо всі класи та повідомлення
      fields.forEach(field => {
        field.classList.remove('invalid');
        const wrapper = field.closest('.support-form-wraper');
        const errorText = wrapper.querySelector('.error-text');
        errorText.style.display = 'none';
      });

      // Якщо хочеш — можеш показати повідомлення "Форму надіслано"
    }
  });
});