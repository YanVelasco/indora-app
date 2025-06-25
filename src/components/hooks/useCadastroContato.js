
import { useState, useEffect, useCallback, useRef } from 'react';

const useCadastroContato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataNascimento: '',
    avatar: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const formRef = useRef(null);
  const avatarInputRef = useRef(null);

  const validateForm = useCallback(() => {
    const errors = {};
    // Adicione a lógica de validação aqui
    // Exemplo:
    if (!formData.nome) {
      errors.nome = 'Nome é obrigatório';
    }
    if (!formData.email) {
      errors.email = 'Email é obrigatório';
    }
    if (formData.senha !== formData.confirmarSenha) {
      errors.confirmarSenha = 'As senhas não coincidem';
    }
    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prevData) => ({
          ...prevData,
          avatar: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Adicione a lógica de envio do formulário aqui
      console.log('Formulário enviado:', formData);
    }
  };

  const openAvatarModal = () => {
    setIsAvatarModalOpen(true);
  };

  const closeAvatarModal = () => {
    setIsAvatarModalOpen(false);
  };

  return {
    formData,
    formErrors,
    isFormValid,
    isAvatarModalOpen,
    formRef,
    avatarInputRef,
    handleInputChange,
    handleAvatarChange,
    handleSubmit,
    openAvatarModal,
    closeAvatarModal
  };
};

export default useCadastroContato;
