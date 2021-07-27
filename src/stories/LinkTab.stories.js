import LinkTab from "./LinkTab.vue";

export default {
  title: "Example/LinkTab",
  component: LinkTab,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LinkTab },
  template: '<link-tab @onClick="onClick" v-bind="$props" />'
});

export const Normal = Template.bind({});
Normal.args = {};

export const Clicked = Template.bind({});
Clicked.args = {
  isClicked: true
};
