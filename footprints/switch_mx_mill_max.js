module.exports = {
    params: {
      designator: 'S',
      hotswap: false,
      reverse: false,
      keycaps: false,
      from: undefined,
      to: undefined
    },
    body: p => {
      const standard = `
        (module MX (layer F.Cu) (tedit 5DD4F656)
        ${p.at /* posición paramétrica */}
  
        ${'' /* referencia de huella */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
  
        ${''/* marcas de esquina */}
        (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
        (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
        (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
        (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
        (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))
  
        ${''/* Pads */}
        (pad 1 thru_hole circle (at 2.565 -5.055) (size 2.2 2.2) (drill 1.5) (layers *.Cu *.Mask))
        (pad 2 thru_hole circle (at -3.785 -2.515) (size 2.2 2.2) (drill 1.5) (layers *.Cu *.Mask))
  
        )
      `
      return standard;
    }
  }
  