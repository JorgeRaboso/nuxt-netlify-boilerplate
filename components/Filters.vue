<template>
    <div class="c-tag-filter">
        <div
            v-for="filter in filterList"
            :key="filter.id"
            class="c-tag-filter__item"
            :class="{'is-active': activeFilter === filter}"
            @click="filterResults(filter)"
        >
            {{ filter }}
        </div>
        <div v-if="isFiltered" class="c-tag-filter__item" @click="filterResults('all')">
            Ver todos
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            filterList: {
                type: Array,
                default: () => []
            },
            isFiltered: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                activeFilter: 'all'
            }
        },
        methods: {
            filterResults (category) {
                this.activeFilter = category
                this.$emit('change-filter', category)
            }
        }
    }
</script>

<style lang="scss" scoped>
.c-tag-filter {
    display: flex;
    align-items: center;
    &__item {
      padding: 8px 16px;
      color: #000;
      border: 1px solid #000;
      border-radius: 4px;
      margin-right: 16px;
      &.is-active {
        background: #000;
        color: #fff;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &__all {
      font-size: 14px;
      text-decoration: underline;
    }
  }
</style>
