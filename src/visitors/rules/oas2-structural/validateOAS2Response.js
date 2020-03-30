class ValidateOAS2Response {
  static get rule() {
    return 'oas2-schema/response';
  }

  get validators() {
    return {
      description(node, ctx) {
        if (node && !node.description) {
          return ctx.createError(ctx.messageHelpers.missingRequiredField('description'), 'key');
        }
        return null;
      },
    };
  }

  OAS2Response() {
    return {
      onEnter: (node, definition, ctx) => ctx.validateFields(
        this.config, this.rule, this.validators,
      ),
    };
  }
}

module.exports = ValidateOAS2Response;