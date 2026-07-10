function CanvasAcordeon({isOpen, detalles}) {
    const animKind = isOpen ? 'displayAnim' : 'hideAnim';

    return (
        <>
            <div className={`canvas ${isOpen ? 'displayAnim' : 'hideAnim'}`}>
                <div className="canvastext">
                    {detalles}
                </div>
                
            </div>
        </>
    )
}

export default CanvasAcordeon