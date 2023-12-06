import { createContext } from "react";

interface CartcontextProps {
  productCartotal: number;
}
const Cartcontext = createContext < Cartcontext || null > null;
