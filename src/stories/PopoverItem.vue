<template>
  <item-wrapper :isSelected="isSelected" @click="onClick">
    <img :src="getIconPath" />
    <label-text>{{ label }}</label-text>
  </item-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const liProps = { isSelected: Boolean };

const ItemWrapper = styled("li", liProps)`
  width: calc(150px - 20px);
  padding: 8px 8px 8px 12px;
  list-style-type: none;
  margin-bottom: 0px;
  cursor: pointer;
  background-color: ${props => (props.isSelected ? "#F0F2F6" : "#fff")};
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

const LabelText = styled.span`
  font-size: 16px;
  padding-left: 10px;
`;

export default {
  name: "propover-item",
  props: {
    selectedType: {
      type: String,
      default: "",
      validator: function(value) {
        return ["", "url", "email", "mobile"].indexOf(value) !== -1;
      }
    },
    icon: {
      type: String,
      validator: function(value) {
        return ["url", "email", "mobile"].indexOf(value) !== -1;
      }
    },
    label: {
      type: String
    }
  },
  components: {
    ItemWrapper,
    LabelText
  },
  computed: {
    getIconPath() {
      if (this.icon) return require(`./assets/${this.icon}.svg`);
      return "";
    },
    isSelected() {
      return this.selectedType === this.icon;
    }
  },
  methods: {
    onClick() {
      this.$store.dispatch("changeLinkState", this.icon);
      this.$emit("onClick", this.icon);
    }
  }
};
</script>
