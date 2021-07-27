<template>
  <input-container :isValid="isValidInputData">
    <input-field :type="selectedType" v-model="dataValue" />
    <button-submit @click="onSubmit" :isValid="isValidInputData">
      <img :src="tickWhiteIcon" />
    </button-submit>
    <cancel-wrapper @click="onClose">
      <img :src="closeIcon" />
    </cancel-wrapper>
  </input-container>
</template>

<script>
import styled from "vue-styled-components";

const validationProps = { isValid: Boolean };

const InputContainer = styled("div", validationProps)`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: flex-end;
  padding: 0px;
  width: 251px;
  height: 40px;
  background: #ffffff;
  border: 1px solid ${props => (props.isValid ? "#bcc2cb" : "#e74f30")};
  box-sizing: border-box;
  border-radius: 8px;
`;

const InputField = styled.input`
  border: 0;
  width: calc(100% - 75px);
  &:focus {
    outline: none;
  }
`;

const ButtonSubmit = styled("div", validationProps)`
  border: 0;
  width: 32px;
  height: 38px;
  background: ${props => (props.isValid ? "#F0F2F6" : "#e74f30")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CancelWrapper = styled.div`
  width: 32px;
  height: 38px;
  background: #f0f2f6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 7px 7px 0;
`;

export default {
  name: "input-data",
  props: {
    selectedType: {
      type: String,
      validator: function(value) {
        return ["url", "email", "mobile"].indexOf(value) !== -1;
      }
    },
    linkValue: {
      type: String,
      default: ""
    }
  },
  components: {
    InputContainer,
    CancelWrapper,
    InputField,
    ButtonSubmit
  },
  data() {
    return {
      dataValue: "",
      isValidInputData: false
    };
  },
  mounted() {
    this.dataValue = this.linkValue;
  },
  watch: {
    dataValue() {
      this.isValidInputData = this.isValidInput();
    }
  },
  computed: {
    tickWhiteIcon() {
      return this.isValidInputData
        ? require("./assets/tick-grey.svg")
        : require("./assets/tick-white.svg");
    },
    closeIcon() {
      return require("./assets/close.svg");
    }
  },
  methods: {
    onClose() {
      this.$emit("onClose", false);
      this.isValidInputData = true;
      this.dataValue = "";
    },
    onSubmit() {
      if (this.isValidInput()) {
        this.$emit("onChange", this.dataValue);
      }
    },
    isValidInput() {
      if (this.dataValue === "") return true;
      let exp = "";
      switch (this.selectedType) {
        case "email":
          exp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          break;
        case "url":
          exp = /^((https?|http?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
          break;
        case "mobile":
          exp = /^(\+\d{1,3}[- ]?)?\d{10}$/;
          break;
        default:
          return false;
      }
      if (exp) {
        return this.dataValue.match(exp) !== null;
      }
      return false;
    }
  }
};
</script>
