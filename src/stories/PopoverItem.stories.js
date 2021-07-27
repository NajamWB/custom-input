import PopoverItem from "./PopoverItem.vue";

export default {
  title: "Example/PopoverItem",
  component: PopoverItem,
  argTypes: {
    selectedType: { control: { type: "select", options: ["", "url", "email", "mobile"] } },
    icon: { control: { type: "select", options: ["url", "email", "mobile"] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PopoverItem },
  template: '<popover-item @onClick="onClick" v-bind="$props" />'
});

export const No = Template.bind({});
No.args = {};

export const Yes = Template.bind({});
Yes.args = {
  isSelected: true
};

export const pageIcon = Template.bind({});
pageIcon.args = {
  icon: "url"
};

export const emailIcon = Template.bind({});
emailIcon.args = {
  icon: "email"
};

export const mobileIcon = Template.bind({});
mobileIcon.args = {
  icon: "mobile"
};
