import React, { useEffect } from "react";
import MenuCategory from './MenuCategory'
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";

function MenuMain() {

    const { loading, data } = useQuery(QUERY_CATEGORIES);
    console.log('1st', data);

    if (loading || !data) {
        return <p>Loading...</p>;
    }

    const { categories } = data;

    console.log('2nd', categories);

    if (categories.length === 0) {
        return <p>No products found.</p>;
    }

    return (
        <div>
            <h1>Menu</h1>
            <MenuCategory />
        </div>
    );
}

export default MenuMain;