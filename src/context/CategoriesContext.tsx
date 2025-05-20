import { createCategoryFirebase, deleteCategoryFirebase, editCategoryFirebase, getAllCategoriesFirebase, getCategoryFirebase } from "@/firebase/categories";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { CategoriesContextType, CategoryType } from "@/types/category";

const CategoriesContex = createContext<CategoriesContextType>({
    categories: [],
    createCategory: async (data: CategoryType) => { },
    getAllCategories: async () => { },
    getOneCategory: async (id: string) => undefined,
    editCategory: async (data: CategoryType, id: string) => { },
    deleteCategory: async (id: string) => { },
});

function CategoriesProvider({ children }: any) {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const { isAuthenticated, loading } = useAuth();

    const getAllCategories = async () => {
        try {
            const categoriesFirebase = await getAllCategoriesFirebase();
            categoriesFirebase ? setCategories(categoriesFirebase) : setCategories([]);

        } catch (e: any) {
            throw new Error(e.message)
        }
    }

    const getOneCategory = async (id: string) => {
        try {
            if (!categories.length) {
                await getAllCategories();
            }

            const category = categories.find((category) => category.id === id);
            return category;

        } catch (e: any) {
            throw new Error(e.message)
        }
    }

    const createCategory = async (data: CategoryType) => {
        try {
            const dataFirebase = await createCategoryFirebase(data);
            const listAtualized = [...categories, dataFirebase];
            setCategories(listAtualized);
        } catch (e: any) {
            throw new Error(e.message)
        }
    }

    const editCategory = async (data: CategoryType, id: string) => {
        try {
            await editCategoryFirebase(data, id);
            const listAtualized = categories.map((category) => {
                if (category.id === id) return data;
                return category;
            });
            setCategories(listAtualized);
        } catch (e: any) {
            throw new Error(e.message)
        }
    }

    const deleteCategory = async (id: string) => {
        try {
            await deleteCategoryFirebase(id);
            const listAtualized = categories.filter((category) => category.id !== id);
            setCategories(listAtualized);
        } catch (e: any) {
            throw new Error(e.message)
        }
    }


    useEffect(() => {
        if(!loading && isAuthenticated) {
            getAllCategories();
        }
    }, [getAllCategories, loading, isAuthenticated])

    return (
        <CategoriesContex.Provider value={{ categories, createCategory, getAllCategories, getOneCategory, editCategory, deleteCategory }}>
            {children}
        </CategoriesContex.Provider>
    );
}

const useCategoriesContext = () => useContext(CategoriesContex);

export { CategoriesProvider, useCategoriesContext };