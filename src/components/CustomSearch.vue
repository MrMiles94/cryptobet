<template>
    <div class="search-area flex-row just-space-between">
        <div class="search-bar flex-row align-center">
            <div class="search-icon"></div>
            <input type="text" name="search" placeholder="Search for market by name or by category" >
        </div>
        <select name="Liquidity" id="Liquidity">
            <option value="Liquid">Liquidity</option>
            <option value="Volotile">Volotile</option>
            <option value="Non-volotile">Non-volotile</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'CustomSearch'
}
</script>
