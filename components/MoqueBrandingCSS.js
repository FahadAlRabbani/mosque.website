export default function MosqueBrandingCSS(props) {
  return (
    <style>{`
      .mosque-website__text--brand {
        color: ${props.data.branding.primary_color}
      }
    `}</style>
  )
}