const openButton = document.querySelector('#open');
const saveButton = document.querySelector('#save');
const textarea = document.querySelector('textarea');
textarea.hidden = true;
let fileHandle;


const editor = CodeMirror.fromTextArea(textarea, {
  mode: 'javascript',
  theme: 'material-palenight',
  lineNumbers: true
});

openButton.addEventListener('click', async function(e) {
  e.preventDefault();
  fileHandle = await window.chooseFileSystemEntries({
    readOnly: false,
    multiple: false
  });

  const file = await fileHandle.getFile();
  const contents = await file.text();
  console.log(contents);
  textarea.textContent = contents;
  editor.setValue(contents);

  await verifyPermission(fileHandle, true);

});

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.writable = true;
  }
  // Check if we already have permission, if so, return true.
  if (await fileHandle.queryPermission(opts) === 'granted') {
    return true;
  }
  // Request permission, if the user grants permission, return true.
  if (await fileHandle.requestPermission(opts) === 'granted') {
    return true;
  }
  // The user did nt grant permission, return false.
  return false;
}

window.addEventListener('keydown', async function(e) {
  const meta = e.ctrlKey === true || e.metaKey === true;
  if (meta && e.key === 's') {
    e.preventDefault();
    try {
      await writeFile(fileHandle, editor.getValue());
      // console.log("Saved.");
    } catch (err) {
      console.error(err);
    }
  }
});

async function writeFile(file, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await file.createWritable();
  // Write the contents of the file to the stream.
  await writable.write(contents);
  // Close the file and write the contents to disk.
  await writable.close();

}


