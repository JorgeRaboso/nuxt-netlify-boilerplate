<template>
    <div>
        <Header />
        <Menu />
        <nuxt />
        <Footer />
    </div>
</template>
<script>
    import Header from '../components/Header'
    import Menu from '../components/Menu'
    import Footer from '../components/Footer'
    export default {
        components: {
            Header,
            Menu,
            Footer
        }
    }
</script>
