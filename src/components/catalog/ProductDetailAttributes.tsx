interface Props {
  productAttributes: any;
}

const ProductDetailAttributes: React.FC<Props> = ({ productAttributes }) => {

  return (
    <div className="rounded-xl bg-[#DEDEDE66] p-4 md:p-10 flex flex-col gap-3">
      { 
        productAttributes.map((category: any, index: number) => (
          <div key={index} className="flex flex-col mt-4 first:mt-0">
            <h3 className="text-size-item text-cc-green font-medium">{category.categoryName}</h3>
            <div className="flex flex-col">
              {
                category.attributesByName.map((attributeName: any, index: number) => (
                  <div key={index} className="flex text-cc-very-dark-green relative group py-4 justify-between">
                    <span className="text-size-paragraph text-balance w-1/2 md:min-w-[200px]">{attributeName.name}</span>
                    <div className="flex ms-auto w-1/2 md:max-w-[400px] md:w-full">
                      {
                        attributeName.attributes.map((attributeValue: any, index: number) => (
                          <span key={index} className="text-size-paragraph">{attributeValue.value}</span>
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