//Tipo de dadp = array de user

//USER
// nome, email e senha
// chave primária - dado que não se repete? E-mail!

import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

interface User {
  nome: string;
  email: string;
  senha: string;
}

const userAdapter = createEntityAdapter<User>({
  selectId: (estado) => estado.email,
});

export const { selectAll } = userAdapter.getSelectors(
  (global: RootState) => global.users
);

const usersSlice = createSlice({
  name: "users",
  initialState: userAdapter.getInitialState(),
  reducers: {
    adicionarUsuario: userAdapter.addOne,
  },
});

//separar actions do reducer
export const { adicionarUsuario } = usersSlice.actions;

export default usersSlice.reducer;
