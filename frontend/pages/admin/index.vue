<template>
    <div class="w-full h-screen flex flex-col justify-start items-center bg-dark-main relative overflow-hidden">
        <div class="w-full h-48 grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2 gap-4">
            <DashboardStatisticsCardComponent icon="fas fa-globe" title="GK Games Sales" data="website" />
            <DashboardStatisticsCardComponent icon="fab fa-ebay" title="eBay Sales"  data="ebay"/>
            <DashboardStatisticsCardComponent icon="fab fa-facebook" title="FB Marketplace Sales" data="facebook" />
            <DashboardStatisticsCardComponent icon="fas fa-sack-dollar" title="Total Sales" data="total" />
        </div>
        <div class="w-full h-[calc(100vh-18.5rem)] grid grid-cols-2 grid-rows-1 gap-4 mt-4">
            <DashboardOrdersCardComponent />
            <DashboardActivityCardComponent />
        </div>
    </div>
</template>