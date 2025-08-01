import { useState } from "react";
import type { PaymentFormData, UsePaymentFormReturn } from "../types";

export const usePaymentForm = (): UsePaymentFormReturn => {
  const [formData, setFormData] = useState<PaymentFormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<Partial<PaymentFormData>>({});
  const [isLoading] = useState(false);

  const handleInputChange = (
    field: keyof PaymentFormData,
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<PaymentFormData> = {};
    let isValid = true;

    // Validation des champs requis
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Prénom requis";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Nom requis";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email requis";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
      isValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Adresse requise";
      isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = "Ville requise";
      isValid = false;
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Code postal requis";
      isValid = false;
    }

    // Validation des informations de paiement
    const cleanCardNumber = formData.cardNumber.replace(/\s/g, "");
    if (!cleanCardNumber.match(/^\d{13,19}$/)) {
      newErrors.cardNumber = "Numéro de carte invalide";
      isValid = false;
    }

    if (!formData.expiryDate.match(/^\d{2}\/\d{2}$/)) {
      newErrors.expiryDate = "Format de date invalide (MM/AA)";
      isValid = false;
    } else {
      const [month, year] = formData.expiryDate.split("/");
      const currentDate = new Date();
      const expiryDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
      if (expiryDate < currentDate) {
        newErrors.expiryDate = "Carte expirée";
        isValid = false;
      }
    }

    if (!formData.cvv.match(/^\d{3,4}$/)) {
      newErrors.cvv = "Code de sécurité invalide";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
  };

  return {
    formData,
    errors,
    isLoading,
    handleInputChange,
    handleSubmit,
    validateForm,
  };
};
