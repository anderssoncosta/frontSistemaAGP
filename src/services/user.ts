import api from "./api";

export interface UsuarioProps {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface UserResponse {
  data: UsuarioProps[];
}

const getUsuario = async (): Promise<UsuarioProps[]> => {
  try {
    const response: UserResponse = await api.post("/users");
    // const response: UserResponse = {
    //   data: [
    //     {
    //       id: 1,
    //       name: "User 1",
    //       email: "andersson@teste.com",
    //       password: "123123",
    //       created_at: "2023-01-01",
    //       updated_at: "2023-01-01",
    //     },
    //     {
    //       id: 2,
    //       name: "User 2",
    //       email: "teste@teste.com",
    //       password: "123123",
    //       created_at: "2023-01-01",
    //       updated_at: "2023-01-01",
    //     },
    //   ],
    // };
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar:", error);
    throw error;
  }
};

// const deleteUsuario = async (id: number ): Promise<boolean> => {
//   try {
//     await api.delete(`/auth/${id}`);
//     return true;
//   } catch (error) {
//     console.error("Erro ao buscar:", error);
//     return false;
//   }
// };

// const saveUsuario = async (obj: UsuarioProps): Promise<boolean> => {
//   try {
//     if (obj.id) {
//       await api.put(`/auth/${obj.id}`, obj, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     } else {
//       await api.post("/auth/register", obj, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     }
//     return true;
//   } catch (error) {
//     console.error("Erro ao buscar:", error);
//     return false;
//   }
// };

export { deleteUsuario, getUsuario, saveUsuario };
