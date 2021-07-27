import Popover from "./Popover.vue";

export default {
  title: "Example/Popover",
  component: Popover,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Popover },
  template: '<popover @onClick="onClick" v-bind="$props" />'
});

export const TabNotClicked = Template.bind({});
TabNotClicked.args = {};

export const TabClicked = Template.bind({});
TabClicked.args = {
  tabClicked: true
};
