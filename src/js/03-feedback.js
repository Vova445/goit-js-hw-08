import throttle from 'lodash.throttle';

const FFS = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const { email: emailInput, message: messageTextarea } = form.elements;
const saveFormState = () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(FFS, JSON.stringify(formData));
};
form.addEventListener('input', throttle(saveFormState, 500));
const restoreFormState = () => {
  const savedData = JSON.parse(localStorage.getItem(FFS));
  if (savedData) {
    emailInput.value = savedData.email;
    messageTextarea.value = savedData.message;
  } 
  else {
    emailInput.value = '';
    messageTextarea.value = '';
  }
};
restoreFormState();
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (emailInput.value.trim() === '' || messageTextarea.value.trim() === '') {
    alert('Заповніть усі поля');
    return;
  }
  console.log('Дані форми надіслано:', {
    email: emailInput.value,
    message: messageTextarea.value,
  });
  localStorage.removeItem(FFS);
  form.reset();
  console.log('Дані форми очищено:', {
    email: emailInput.value,
    message: messageTextarea.value,
  });
});
