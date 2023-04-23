<template>
    <div class="w-full h-screen flex flex-col justify-start items-center bg-dark-main relative overflow-hidden">
        <div class="w-full h-48 grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2 gap-4">
            <DashboardStatisticsCardComponent />
            <DashboardStatisticsCardComponent />
            <DashboardStatisticsCardComponent />
            <DashboardStatisticsCardComponent />
        </div>
        <div class="w-full h-[calc(100vh-18.5rem)] grid grid-cols-2 grid-rows-1 gap-4 mt-4">
            <DashboardOrdersCardComponent />
            <DashboardActivityCardComponent />
        </div>
    </div>
</template>