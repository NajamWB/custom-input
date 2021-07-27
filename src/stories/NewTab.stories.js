import NewTabLink from "./NewTab.vue";

export default {
  title: "Example/NewTab",
  component: NewTabLink,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NewTabLink },
  template: '<new-tab-link @onClick="onClick" v-bind="$props" />'
});

export const Normal = Template.bind({});
Normal.args = {};

export const Clicked = Template.bind({});
Clicked.args = {
  isClicked: true
};
