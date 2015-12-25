<style lang="sass" scoped>
    .lm-pager {
        font-size: 14px;
        color: #333;
        text-align: center;

        > * {
          display: inline-block;
          height: 22px;
          line-height: 22px;
          vertical-align: middle;
          user-select: none;
        }


        .pager-splitter {
            height: 22px;
            width: 1px;
            background: #333;
            margin: 0 10px;
        }

        .pager-num {
            padding: 0 5px;
            text-align: center;

            &.cur {
                 background: #56b6d9;
                 color: white;

                &:hover {
                     background:#56b6d9;
                }
            }
        }

        .pager-num {
            cursor: pointer;

            &:hover {
                 background: #97d7ef;
                 color: white;
            }
        }

        .pager-prev, .pager-next {
            cursor: pointer;
        }
    }
</style>

<template>
    <div class="lm-pager">
        <span class="total">{{total}} {{pagerLabel}}</span>
        <template v-if="!isOnePage">
            <span class="pager-splitter"></span>
            <span class="pager-prev" v-on:click="gotoPrev">prev</span>
            <template v-for="num in pageNumRange">
                <span class='pager-num {{pageIndex == num ? "cur" : ""}}' v-on:click="selectPage(num)">{{num}}</span>
            </template>
            <span class="pager-next" v-on:click="gotoNext">next</span>
        </template>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        props: {
            pageIndex: {
                type: Number,
                default: 1
            },
            pagerLabel: {
                type: String,
                default: 'items'
            },
            pagerSize: {
                type: Number,
                default: 5
            },
            pageSize: {
                type: Number,
                default: 10
            },
            total: {
                type: Number,
                validator: function (value) {
                    return value >= 0;
                }
            }
        },

        computed: {
            maxPageIndex: function () {
                return Math.ceil(this.total / this.pageSize);
            },
            maxPagerPos: function () {
                return Math.ceil(this.maxPageIndex / this.pagerSize);
            },
            pagerPos: function() {
                    return Math.min(Math.max(Math.ceil(this.pageIndex / this.pagerSize), 1), this.maxPagerPos);
            },
            startPageNum: function () {
                return Math.max((this.pagerPos - 1) * this.pagerSize + 1, 1);
            },
            endPageNum: function () {
                return Math.min(this.startPageNum + this.pagerSize, this.maxPageIndex + 1);
            },
            pageNumRange: function () {
                return _.range(this.startPageNum, this.endPageNum);
            },
            isOnePage: function () {
                return this.pageSize >= this.total;
            }
        },

        methods: {
            selectPage: function (num) {
                this.pageIndex = num;
            },

            gotoNext: function () {
                var next = this.pageIndex + 1;

                if (next < this.maxPageIndex) {
                    this.pageIndex = next;
                }
            },

            gotoPrev: function () {
                var prev = this.pageIndex - 1;

                if (prev > 0) {
                    this.pageIndex = prev;
                }
            }
        }

    };
</script>
