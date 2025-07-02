interface Props {
  productAttributes: any;
}

const ProductDetailAttributes: React.FC<Props> = ({ productAttributes }) => {

  return (
    <div className="rounded-xl bg-[#DEDEDE66] p-10 flex flex-col gap-3">
      { 
        productAttributes.map((category: any) => (
          <div className="flex flex-col">
            <h3 className="text-size-item text-cc-green font-medium">{category.categoryName}</h3>
            <div className="flex flex-col">
              {
                category.attributesByName.map((attributeName: any) => (
                  <div className="flex text-cc-very-dark-green relative group py-4 justify-between">
                    <span className="text-size-paragraph text-balance">{attributeName.name}</span>
                    <div className="flex ms-auto max-w-[400px] w-full">
                      {
                        attributeName.attributes.map((attributeValue: any) => (
                          <span className="text-size-paragraph">{attributeValue.value}</span>
                        ))
                      }
                    </div>
                    <div className="group-last:hidden attribute-table-line absolute h-[1px] w-full bottom-0"></div>
                    <div className="group-last:block hidden attribute-table-line-dark absolute h-[1px] w-full bottom-0"></div>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductDetailAttributes;