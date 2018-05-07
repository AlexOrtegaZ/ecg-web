<template>
    <div class="form-group">
        <label v-if="label">
        {{label}}
        </label>
        <select @change="emitChange" class="form-control border-input" v-model="selected" :name="elementName">
            <option v-for="option in options" v-bind:value="option.id" v-bind:key="option.id">{{ option.name }}</option>
        </select>
    </div>
</template>
<script>
    export default{
        props: ['elementName', 'level','type','module', 'label'],
        data: function() {
            return { selected: null } 
        },
        methods: {
            emitChange: function() {
                this.$emit('changeval', this.selected);
            }
        }
    };
</script>