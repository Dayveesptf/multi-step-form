import React, { createContext, useState, useContext } from 'react';

type PlanDetails = {
  name: string;
  price: string;
};

type FormData = {
  name: string;
  email: string;
  number: string;
  plan?: PlanDetails;
  addOns: { id: string; title: string; description: string; price: number }[];
};

type FormContextType = {
  formData: FormData;
  updateFormData: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    number: '',
    plan: { name: '', price: '' },
  addOns: [], // Initialize as an empty array
  });

  const updateFormData: FormContextType['updateFormData'] = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};


