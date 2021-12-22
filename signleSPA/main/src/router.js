import { BrowserRouter} from "react-router-dom";

export default function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}