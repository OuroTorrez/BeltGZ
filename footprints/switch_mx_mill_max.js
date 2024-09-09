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
        (fp_text reference "${p.ref}" (at 0 -3.5) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 5) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
  
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
        
        ${''/* Stabilizer pins */}
        (pad "" np_thru_hole circle (at -5.055 0.025) (size 1.7 1.7) (drill 1.7) (layers "*.Cu" "*.Mask") (uuid "716133b9-085f-4181-811e-184ad73b26ac"))
        (pad "" np_thru_hole circle (at 0.025 0.025) (size 4 4) (drill 4) (layers "*.Cu" "*.Mask") (uuid "1addb751-21e8-4a36-a5e8-866efe277ffd"))
        (pad "" np_thru_hole circle (at 5.105 0.025) (size 1.7 1.7) (drill 1.7) (layers "*.Cu" "*.Mask") (uuid "7abbf750-2afc-4b03-a380-9d27f467037f"))

        ${'' /* keycap marks */}
        (fp_line (start -9.5 -9.5) (end 9.5 -9.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start 9.5 -9.5) (end 9.5 9.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start 9.5 9.5) (end -9.5 9.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start -9.5 9.5) (end -9.5 -9.5) (layer Dwgs.User) (width 0.15))

        )
      `
      const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9.5 -9.5) (end 9.5 -9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.5 -9.5) (end 9.5 9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.5 9.5) (end -9.5 9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9.5 9.5) (end -9.5 -9.5) (layer Dwgs.User) (width 0.15))
      `
      return `
      ${standard}
      `
    }
  }
  