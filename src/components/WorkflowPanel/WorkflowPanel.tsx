import {
    CalciteStepper,
    CalciteStepperItem,
} from '@esri/calcite-components-react';
import React from 'react';
import { LocationSelector } from './Step1-LocationSelector/LocationSelector';
import { RiskAdjustments } from './Step2-RiskAdjustments/RiskAdjustments';
import { QuizAboutOperation } from './Step3-QuizAboutOperation/QuizAboutOperation';
import { ValueOfDamage } from './Step4-ValueOfDamage/ValueOfDamage';
import { CostAdjustment } from './Step5-CostAdjustment/CostAdjustment';
import { BenefitsAndResults } from './Step6-BenefitsAndResults/BenefitsAndResults';

export const StepperContentContainerClasses =
    'p-2 text-theme-foreground text-sm';

export const WorkflowPanel = () => {
    return (
        <div className=" w-full h-full overflow-y-auto">
            <CalciteStepper layout="vertical" icon>
                <CalciteStepperItem heading="Step 1: Select a location">
                    <LocationSelector />
                </CalciteStepperItem>

                <CalciteStepperItem heading="Step 2: Risk Adjustments">
                    <RiskAdjustments />
                </CalciteStepperItem>

                <CalciteStepperItem heading="Step 3: Questions about your operation">
                    <QuizAboutOperation />
                </CalciteStepperItem>

                <CalciteStepperItem heading="Step 4: Damage Value">
                    <ValueOfDamage />
                </CalciteStepperItem>

                <CalciteStepperItem heading="Step 5: Cost Adjustment">
                    <CostAdjustment />
                </CalciteStepperItem>

                <CalciteStepperItem heading="Step 6: Benefit Analysis">
                    <BenefitsAndResults />
                </CalciteStepperItem>
            </CalciteStepper>
        </div>
    );
};
