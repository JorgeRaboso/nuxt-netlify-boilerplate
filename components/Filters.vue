<template>
    <div class="c-filters">
        <div class="c-filters__inner">
            <div class="c-filters__toggle" @click="toggleFilters">
                Filtrar
            </div>
            <div v-if="isActive" class="c-filters__list">
                <div
                    v-for="filter in filterList"
                    :key="filter.id"
                    class="c-tag-filter__item"
                    :class="{'is-active': activeFilter === filter.name}"
                    @click="filterResults(filter.name)"
                >
                    {{ filter.name }}
                </div>
                <div v-if="isFiltered" class="c-tag-filter__item" @click="filterResults('all')">
                    Ver todos
                </div>
            </div>
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
                isActive: false,
                activeFilter: 'all'
            }
        },
        methods: {
            filterResults (category) {
                this.activeFilter = category
                this.$emit('change-filter', category)
            },
            toggleFilters () {
                this.isActive = !this.isActive
            }
        }
    }
</script>

<style lang="scss" scoped>
.c-filters {
  margin-bottom: 64px;
  &__toggle {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
  &__list {
    margin-top: 16px;
        display: flex;
        align-items: center;
  }
}
.c-tag-filter {
    &__item {
      padding: 8px 16px;
      color: var(--base-text);
      border: 1px solid var(--base-text);
      border-radius: 4px;
      margin-right: 16px;
      &.is-active {
        background: var(--base-text);
        color: var(--base-background);
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
