<style lang="sass" scoped>
    .lm-table {
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
    <table class="lm-table">
        <thead>
            <tr>
                <th v-for="header in data.header">{{header}}</th>
            </tr>
        </thead>
        <tr v-for="row in data.rows">
            <td v-for="cell in row">
                <div class="td-wrapper">
                    {{cell}}
                </div>
            </td>
        </tr>
    </table>
</template>


<script>
    export default {
        props: {
            data: {
                type: Object,
                default: {
                    header: [],
                    rows: []
                }
            }
        }
    };
</script>
