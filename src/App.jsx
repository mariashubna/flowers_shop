import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FlowersPage = lazy(() => import("./pages/FlowersPage/FlowersPage"));
const BouquetPage = lazy(() => import("./pages/BouquetPage/BouquetPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/bouquets/:id" element={<BouquetPage />} />
        <Route path="/flowers" element={<FlowersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
