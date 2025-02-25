import { AppHeader } from '@components/AppHeader/AppHeader';
import { InfoPanel } from '@components/InfoPanel/InfoPanel';
import MapViewContainer from '@components/Map/MapViewContainer';
import { WorkflowPanel } from '@components/WorkflowPanel/WorkflowPanel';
import { CalciteButton } from '@esri/calcite-components-react';
import { selectQueryGeometryType } from '@store/WolfPredation/selectors';
// import { useSaveAppState2HashParams } from '@hooks/useSaveAppState2HashParams';
import { queryRiskProbabilityByPoint } from '@store/WolfPredation/thunks';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const CalculatorPage = () => {
    const dispatch = useDispatch();

    const queryGeometryType = useSelector(selectQueryGeometryType);

    // useSaveAppState2HashParams();

    return (
        <>
            <AppHeader />

            <div className="absolute top-[65px] bottom-0 w-screen xl:flex bg-theme-background text-theme-foreground">
                <div className=" w-full xl:w-[600px] shrink-0 h-auto xl:h-full p-4 z-10">
                    <WorkflowPanel />
                </div>

                <div className="relative grow h-[500px] xl:h-full w-full xl:w-auto">
                    <MapViewContainer
                        mapOnClick={(point) => {
                            dispatch(queryRiskProbabilityByPoint(point));
                        }}
                    />
                </div>

                {/* <div className="xl:absolute xl:top-0 xl:bottom-0 xl:right-0 w-full xl:w-[400px] shrink-0 h-auto xl:h-full p-4 bg-white bg-opacity-50 backdrop-blur-sm text-theme-foreground z-10">
                    <InfoPanel />
                </div> */}
            </div>
        </>
    );
};
