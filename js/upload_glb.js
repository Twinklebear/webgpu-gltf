var glbBuffer = null;

function uploadGLB(file)
{
    var reader = new FileReader();
    reader.onerror = function() {
        alert("error reading GLB file");
    };
    reader.onload = function() {
        glbBuffer = reader.result;
    };
    reader.readAsArrayBuffer(file[0]);
}

