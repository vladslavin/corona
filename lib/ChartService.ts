export const DownloadCanvasAsPng = (fileName: string, canvas: HTMLCanvasElement) => {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${fileName}.png`;
    link.click();
};
