<template>
    <div>
        <Header />
        <Menu />
        <nuxt />
    </div>
</template>
<script>
    import Header from '../components/Header'
    import Menu from '../components/Menu'
    export default {
        components: {
            Header,
            Menu
        }
    }
</script>
