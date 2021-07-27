<template>
  <link-wrapper @click="onClick" :isSelected="isClicked">
    <img :src="tabIcon" />
  </link-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const bgProps = { isSelected: Boolean };

const LinkWrapper = styled("div", bgProps)`
  width: 32px;
  height: 38px;
  background: #f0f2f6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px 0 0 7px;
  background: ${props => (props.isSelected ? "#494C53" : "#f0f2f6")};
`;

export default {
  name: "link-tab",
  props: {
    isClicked: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LinkWrapper
  },
  computed: {
    tabIcon() {
      return this.isClicked ? require("./assets/link-clicked.svg") : require("./assets/link.svg");
    }
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>
