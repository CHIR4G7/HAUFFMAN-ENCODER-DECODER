import { HuffmanCoder } from "./hauffman.js";


// onload = function () {
    const treearea = document.getElementById('treearea');
    const encode = document.getElementById('encode');
    const decode = document.getElementById('decode');
    const temparea = document.getElementById('temptext');
    const upload = document.getElementById('uploadfile');

    const coder = new HuffmanCoder();//get and object of hauffman coder

    upload.addEventListener('change', (event) => {
        alert("uploaded");
    });

    encode.onclick = function () {
        const uploadedfile = upload.files[0];
        if (uploadedfile === undefined) {
            alert("no file");
            return;
        }
        const reader = new FileReader();
        reader.onload = function (fileLoaded) {
            const text = fileLoaded.target.result;
            if (text.length === 0) {
                alert("cannot be empty!");
                return;
            }
            let [encoded, tree_structure, info] = coder.encode(text);
            downloadFile(uploadedfile.name.split('.')[0] + '_encoded.txt', encoded);
            treearea.innerText = tree_structure;
            treearea.style.marginTop = '200px';
            temparea = info;
        }
        reader.readAsText(uploadedfile, "UTF-8");
    }

    decode.onclick = function () {
        const uploadedFile = upload.files[0];
        if (uploadedFile === undefined) {
            alert("No file uploaded !");
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
            const text = fileLoadedEvent.target.result;
            if (text.length === 0) {
                alert("Text can not be empty ! Upload another file !");
                return;
            }
            let [decoded, tree_structure, info] = coder.decode(text);
            downloadFile(uploadedFile.name.split('.')[0] + '_decoded.txt', decoded);
            treearea.innerText = tree_structure;
            treearea.style.marginTop = '2000px';
            temptext.innerText = info;
        };
        fileReader.readAsText(uploadedFile, "UTF-8");
    };

    function downloadFile(fileName,data)
    {
        let a = document.createElement('a');
        a.href = "data:application/octet-stream,"+encodeURIComponent(data);
        a.download = fileName;
        a.click();
    }

// }

