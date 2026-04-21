import React from 'react';
import { useSagradaFamiliaAuth } from '@/contexts/SagradaFamiliaContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const AdminDashboardPage = () => {
  const { currentUser, logout } = useSagradaFamiliaAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast({ title: "Logout realizado com sucesso." });
      navigate('/admin-login');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro no Logout",
        description: "Não foi possível sair. Tente novamente.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Admin</h1>
          <p className="text-gray-600">Bem-vindo, {currentUser?.email}</p>
        </div>
        <Button onClick={handleLogout} variant="destructive">
          Sair
        </Button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Leads - Sagrada Família</h2>
        <p className="text-gray-700">
          A visualização de leads ainda não foi implementada.
        </p>
         <p className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          🚧 Esta funcionalidade não está implementada. Você pode solicitar a tabela de leads em seu próximo prompt! 🚀
        </p>
      </div>
    </div>
  );
};

export default AdminDashboardPage;