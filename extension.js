const vscode = require("vscode");

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "multi-selection-replace.multiSelectionReplace",
      async function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;
        const doc = editor.document;
        const edit = new vscode.WorkspaceEdit();

        const expression = await vscode.window.showInputBox();
        if (!expression) return;

        let a = editor.selections.map((sel) => doc.getText(sel));
        editor.selections.forEach((sel, i) => {
          let e = doc.getText(sel);
          edit.replace(doc.uri, sel, eval(expression).toString());
        });

        vscode.workspace.applyEdit(edit);
        editor.selections = [editor.selection];
      }
    )
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
