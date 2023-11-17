import React from 'react';
import EconomyLayout from "@/pages/economy/layout";
import {BudgetPage} from "@/pageComponents/Economy";

const Budget = () => {
    return (
        <EconomyLayout>
            <BudgetPage/>
        </EconomyLayout>
    );
};

export default Budget;