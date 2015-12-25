<style lang="sass" scoped>
    .lm-table {
        width: 100%;
        th, td {
            border-right: 1px dashed #c3c2c2;
            padding-left: 10px;
            padding-right: 5px;
            text-align: left;

            &:last-child {
                border-right: none;
            }

            &.center {
                text-align: center;
            }
        }

        th {
            border-bottom: 1px solid #ccc;
            padding-top: 4px;
            padding-bottom: 4px;

            &, * {
                font-size: 14px;
                font-weight: 500;
                color: #333333;
                white-space: nowrap;
            }
        }

        td {
            & {
                font-size: 12px;
                font-weight: normal;
                color: #333333;
            }

            .td-wrapper {
                display: block;
                display: -webkit-box;
                max-height: 90px;
                overflow: hidden;
                text-overflow: ellipsis;
                vertical-align: middle;
                width: 100%;
                word-break: break-all;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                padding-top: 4px;
            }
        }

    }

</style>

<template>
    <Pager :page-index="pageIndex" :page-size="pageSize" :total="total" pager-label="items"></Pager>
    <table class="lm-table">
        <thead>
            <tr>
                <th v-for="header in data.header">{{header}}</th>
            </tr>
        </thead>
        <tr v-for="row in pageData">
            <td v-for="cell in row">
                <div class="td-wrapper">
                    {{cell}}
                </div>
            </td>
        </tr>
    </table>
    <Pager :page-index="pageIndex" :page-size="pageSize" :total="total" pager-label="items"></Pager>
</template>


<script>
    import Pager from './Pager.vue';

    export default {
        props: {
            data: {
                type: Object,
                default: {
                    header: [],
                    rows: []
                }
            },
            pageSize: {
                type: Number,
                default: 5
            }
        },
        computed: {
            pageData: function () {
                var total = this.total;

                console.log('pageSize', this.pageSize);

                var startIndex = Math.min((this.pageIndex - 1) * this.pageSize, total);
                var endIndex = Math.min(startIndex + this.pageSize, total);


                var pageData = this.data.rows.slice(startIndex, endIndex);
                return pageData;
            },
            total: function () {
                return this.data.rows.length;
            }
        },
        data: function() {
            return {
                pageIndex: 1
            };
        },

        components: {
            Pager
        }
    };
</script>
