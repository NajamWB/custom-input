import CustomInput from "./CustomInput.vue";

export default {
  title: "Example/CustomInput",
  component: CustomInput,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CustomInput },
  template: '<custom-input v-bind="$props" />'
});

export const TabNotClicked = Template.bind({});
TabNotClicked.args = {};

export const TabClicked = Template.bind({});
TabClicked.args = {
  tabClicked: true
};
