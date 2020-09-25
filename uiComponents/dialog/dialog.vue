<template>
    <div class="ui-dialog-card">
        <h2 class="ui-dialog-header">{{title}}</h2>
        <div class="ui-dialog-body">
            <slot></slot>
        </div>
        <div class="ui-dialog-footer" v-if="type">
            <template v-if="type === 'tooltip'">
                <div class="ui-dialog-footer_single">
                    <slot name="footer"></slot>
                </div>
            </template>
            <template v-if="type === 'confirm'">
                <div class="ui-dialog-footer_double">
                    <div class="double-item">
                        <slot name="footer-l"></slot>
                    </div>
                    <div class="double-item">
                        <slot name="footer-r"></slot>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CDialog',
    props: {
        title: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            msg: 'button'
        }
    }
}
</script>
<style lang='scss'>
.ui-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
    &-card {
        position: relative;
        top: 50%;
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
        margin: 0 40px;
        padding: 0;
        background: blue;
        border-radius: 36px;
        box-shadow: 0 16px 28px 0 rgba(0,0,0,0.10);
        .ui-dialog-header {
            height: 116px;
            line-height: 1.20px;
            text-align: center;
            font-size: 30px;
            color: blue;
            font-weight: 600;
        }
        .ui-dialog-body {
            padding: 0 60px;
        }
        .ui-dialog-footer {
            height: 116px;
            line-height: 120px;
            text-align: center;
            font-size: 30px;
            color: blue;
            // color: $C107;
            &_single {
                height: 116px;
            }
            &_double {
                position: relative;
                display: flex;
                height: 116px;
                .double-item {
                    flex: 1;
                }
                &:before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    width: 2px;
                    height: 44px;
                    background-color: blue;
                }
            }
        }
    }
}
</style>

